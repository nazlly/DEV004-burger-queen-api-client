import React, { createContext, useContext, useState, useEffect } from "react"
import Swal from "sweetalert2"
import { fetchDB } from "../../conection/fetch"

const ManagementContext = createContext()
export const ManagementProvider = ({children}) => {
    const [user, setUser]= useState ({
        "email": "",
        "password": "",
        "roles": {}
    })
    const [users, setUsers]= useState([])

    useEffect(() => {
      fetchDB("users", "GET", "", localStorage.getItem("token"))
      .then(data => {
          setUsers(data)
      })
    }, [])

    const handleInput = e => {
      if (e.target.name === "roles") {
        setUser({
          ...user,
          [e.target.name]: {
            [e.target.value]: true
          }
        })
      } else {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
      }
    }

    const deleteUser = (userId) => {

      Swal.fire({
        title: 'Estas seguro de eliminar el usuario?',
        text: "No podras recuperarlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
      }).then((result) => {

        if (result.isConfirmed) {
          setUsers(
            users.filter( user => user.id !== userId )
          )

          fetchDB(`users/${userId}`, "DELETE", "", localStorage.getItem("token"))
          .then((resultado) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'El contacto ha sido eliminado',
              showConfirmButton: false,
              timer: 1500
            })
          })
        }
      })
    }

    const creatUser = () => {
      setUsers([
        ...users,
        user
      ])

      //guardar en BD
      fetchDB("users", "POST", user, localStorage.getItem("token"))
      .then((resultado) => console.log("Datos enviados: ", resultado))
    }

    const editUserContext = (userEdit) => {
      fetchDB(`users/${userEdit.id}`, "PATCH", userEdit, localStorage.getItem("token"))
      .then((resultado) => console.log("Usuario editado: ", resultado))
    }

    return (
        <ManagementContext.Provider
          value = {{
            user,
            users,
            deleteUser,
            creatUser,
            handleInput,
            editUserContext
          }}
        >
          {children}
        </ManagementContext.Provider>
      )
    }
      export const useCollaborator = () => {
        return useContext(ManagementContext)
      }