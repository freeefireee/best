// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashCan, faCircleChevronDown, faCircleChevronUp, faPen } from '@fortawesome/free-solid-svg-icons';
// import fetchAllUsers from '../../store/reducers/userReducer';
// import './userlist.css';

// const UserList = () => {
//   const dispatch = useDispatch();
//   const { users } = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(fetchAllUsers());
//   }, [dispatch]);

//   return (
//     <div className='content-box'>
//       <h1>UserList</h1>
//       <div className="icon">
//         <FontAwesomeIcon className='icon-up' icon={faCircleChevronUp} />
//         <FontAwesomeIcon className='icon-down' icon={faCircleChevronDown} />
//       </div>
//       <button className='btn'>ADD NEW STUDENT</button>
//       <hr />
//       {users && users.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>E-mail</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className='content'>
//                 <td><img src={`/img/${user.id}.jpg`} alt={`Profile of ${user.name}`} /></td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td><FontAwesomeIcon icon={faPen} className='pen' /></td>
//                 <td><FontAwesomeIcon icon={faTrashCan} className='trash' /></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };

// export default UserList;


import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchAllUsers, deleteUsers } from '../../store/reducers/userReducer'; 
import classes from './userlist.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrashCan, faPen, faSort } from '@fortawesome/free-solid-svg-icons'; 
 
const UserList = () => { 
  const dispatch = useDispatch(); 
  const { users } = useSelector((state) => state.users); 
 
  const onDelete = (id) => { 
    dispatch(deleteUsers(id)); 
  }; 
 
  useEffect(() => { 
    dispatch(fetchAllUsers()); 
  }, [dispatch]); 
 
  return ( 
    <div className='content-box'> 
      <div className={classes.userlist}> 
        <h1>UserList</h1> 
        <div className={classes.btn}> 
          <div className={classes.faSort}> 
            <FontAwesomeIcon icon={faSort} style={{ color: "#FFD43B" }} /> 
          </div> 
          <button className={classes.button}>ADD NEW STUDENT</button> 
        </div> 
      </div> 
     <hr />
      {users && users.length > 0 ? ( 
        <table> 
          <thead> 
            <tr> 
              <th>name</th> 
              <th>username</th> 
              <th>email</th> 
              <th>phone</th> 
            </tr> 
          </thead> 
          <tbody> 
           
 
{users.map((user) => ( 
  <tr key={user.id} className='content'> 
    <td>{user.name}</td> 
    <td>{user.username}</td> 
    <td>{user.email}</td> 
    <td>{user.phone}</td> 
    <td> 
      <FontAwesomeIcon className={classes.faPen} icon={faPen} style={{ color: 'yellow' }} /> 
    </td> 
    <td> 
      <FontAwesomeIcon 
        onClick={() => onDelete(user.id)} 
        icon={faTrashCan} 
        className={classes.delete} 
        style={{ color: 'yellow' }} 
      /> 
    </td> 
  </tr> 
))} 
          </tbody> 
        </table> 
      ) : ( 
        <p>np users found</p> 
      )} 
    </div> 
  ); 
}; 
 
export default UserList;