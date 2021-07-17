import React  from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import axios from 'axios'








function MyVerticallyCenteredModal(props) {



   

    const emailid = React.useRef();
    const password = React.useRef();
    const userName = React.useRef();
    const role = React.useRef();
    const permission = React.useRef();

   const handleSubmit = e =>
   {
       e.preventDefault();
       const data ={
            email : emailid.current.value,
            password : password.current.value,
            userName : userName.current.value,
            userType : role.current.value,
            permission : permission.current.value
       }
       
       axios.post('adduser',data).then(
           res => {
             console.log(res)
             window.alert("User Created Sucessfully")
          }
          

       ).catch(
        err => {
            console.log(err);
        }
       )
   }
    



    return (
      <Modal
        backdrop="static"
        keyboard={false}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="">
            Add a new User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form autocomplete="off" onSubmit={handleSubmit} >
        <input autocomplete="false" name="hidden" type="text" style={{display:"none"}}/>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input ref={emailid} autoComplete="off" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input ref={userName} type="text" class="form-control"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input ref={password} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

    <div className="dropdown-roles">
    <label for="role">Role:</label>

            <select ref={role} name="role" id="cars">
                <option value="Administrator">Administrator</option>
                <option value="Editor">Editor</option>
                <option value="User">User</option>
                <option value="Guest">Guest</option>
            </select>

    {/* Permission */}

    <label className="mx-3" for="permission">Permissions : </label>

    <select ref={permission} name="permission" id="cars">
        <option value="l1">View</option>
        <option value="l2">View , Download</option>
        <option value="l3">Edit ,View ,Download </option>
        <option value="l4">Create , Edit , View , Download</option>
        <option value="l5">Create , Delete , Edit , View , Download</option>
    </select>

    </div>
    <button type="submit" className="btn btn-primary my-3">Create User</button>
    </form>
    

        </Modal.Body>
        <Modal.Footer>
        
       
          <Button variant="danger" onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default function ButtonModal() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>    
        <Button className="mx-3" variant="outline-info" size="sm" onClick={() => setModalShow(true)}>
          Add a new User
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
 