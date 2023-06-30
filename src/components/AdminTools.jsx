import React, { useState } from 'react'
import Button from './iu/Button'
import { useCollaborator } from '../context/orders/ManagementContext'

const AdminTools = () =>{
  const {
    user,
    users,
    deleteUser,
    creatUser,
    editUserContext,
    handleInput
  } = useCollaborator()

  const [editUser, setEditUser] = useState(false)
  const [userEdit, setUserEdit]= useState ({
    "email": "",
    "password": "",
    "roles": {}
  })

  const handleEditarUser = user => {
    setEditUser(true)
    setUserEdit({
      ...user,
      "email": user.email,
      "password": "",
      "roles": user.roles
    })
  }

  const handleInputEdit = e => {
    if (e.target.name === "roles") {
      setUserEdit({
        ...userEdit,
        [e.target.name]: {
          [e.target.value]: true
        }
      })
    } else {
      setUserEdit({
        ...userEdit,
        [e.target.name]: e.target.value
      })
    }
  }

    return (
    
    <div className="menu">
          <div className="table">
          <div className={`fila base ${ "bg-green"}`}>
              <div className="columna email-columna">Email</div>
              <div className="columna rol-columna">Cargo</div>
              <div className="columna options-columna">Opciones</div>
            </div>
  
            {
              users.map((u, id) => (
                  <div key={id} className="fila">
                    <div className="columna email-columna">{u.email}</div>
                    <div className="columna rol-columna">{("admin" in u.roles)?"admin":("waiter" in u.roles)?"mesero":("chef" in u.roles)?"chef":"no definido"}</div>
                    <div className="columna options-columna">
                    <a href="#miModal" onClick={()=>handleEditarUser(u)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16" >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                      </svg>
                    </a>

                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16" onClick={()=>deleteUser(u.id)}>
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        
                    </svg>
                    </div>
                  </div>
                )
              )
            }
          </div>

      <a href="#miModal" onClick={() => setEditUser(false)}>
        <button
          className="btn-transparent"
          type="submit" 
        >
          <Button 
            color={"btn-pink"} 
            value={"Crear Usuario Nuevo"} 
          />
        </button>
      </a>

      <div id="miModal" className="modal">
        <div className="modal-contenido">
          <a className="close-modal" href="/">X</a>

          <h2>Agregar Nuevo Usuario</h2>
          <form className="formulario" action="">

      <input 
        className="input" 
        type="email" 
        placeholder="Agregue e-mail del usuario"
        name="email"
        value={editUser ? userEdit.email : user.email}
        onChange={editUser ? handleInputEdit : handleInput}
      />
      <input 
        className="input" 
        type="password" 
        placeholder="Digite nueva contraseña"
        name="password"
        value={editUser ? userEdit.password : user.password}
        onChange={editUser ? handleInputEdit: handleInput}
      />
      <div className='checkbox'>  
        <input 
          value="admin"
          name="roles"
          className="input" 
          type="radio"
          checked={editUser ? "admin" in userEdit.roles ? true : false : "admin" in user.roles ? true : false}
          onChange={editUser ? handleInputEdit: handleInput} 
        /> Admin

        <input 
          value="waiter"
          name="roles"
          className="input" 
          type="radio" 
          checked={editUser ? "waiter" in userEdit.roles ? true : false : "waiter" in user.roles ? true : false}
          onChange={editUser ? handleInputEdit: handleInput} 
        /> Waiter

        <input 
          value="chef"
          name="roles"
          className="input" 
          type="radio" 
          checked={editUser ? "chef" in userEdit.roles ? true : false : "chef" in user.roles ? true : false}
          onChange={editUser ? handleInputEdit: handleInput} 
        /> Chef

      </div>    

      <button
        onClick={
          ()=>{
            editUser ? editUserContext(userEdit) : creatUser()
          } 
        }
        className="btn-transparent"
        type="submit" 
      >
        {
          editUser ? 
            <Button 
              type="submit"
              color={"btn-pink"} 
              value={"Editar usuario"} 
            />
          : <Button 
            type="submit"
            color={"btn-pink"} 
            value={"Crear nuevo usuario"} 
          />
        }
      </button>
    </form>
        </div>  
      </div>
        </div>
    )    
}

export default AdminTools