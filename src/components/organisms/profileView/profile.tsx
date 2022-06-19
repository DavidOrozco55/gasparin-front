import "./Profile.css"
//import imgProfile from "../../assets/images/windmill_farms_logo_profile_pic.png";
import { Button, List, ListItemText } from '@mui/material';
import { fontWeight } from '@mui/system';
import EditIcon from '@material-ui/icons/Edit';
function Profile() {
  return (
    
    <div className='Profile-container'>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100;1,300&display=swap" rel="stylesheet"></link>
      <div className='Profile-icon'>
        <img  alt="prof_img" className='profile-img' />
      </div>
      <div className='Profile-description'>
        
          <div>
              <h2>About us</h2>
              <List>
                <ListItemText>
                <article className='Profile-description-article'>
                  Founded in 1940, Windmill Farms specializes in cultivate the best quality Farm products like
                  animal based products like milk, eggs and of course meat. Of course we have the most fresh and
                  most delicious vegetables that you can imagine.

                  Henry Boney, a Texan transplant, had been working as an ice cream delivery man in Guadalajara since 
                  he fled his hometown to escape the dust bowl. Working at that same facility, he met Jessie – an 
                  office worker whom he would share the rest of his life with. Shortly after the couple married in 1934,
                  Boney borrowed a $600 from his new in-laws in order to buy a truck to help him haul produce into 
                  his new venture – a fruit stand. Risky as it may have been, the fruit stand rapidly multiplied into 
                  five, and then blossomed into grocery stores.
                </article>
                </ListItemText>
              </List>
              
          </div>
      </div>

      <div className='Profile-basic-information'>
          <h2>Basic Info</h2>
        <div className='Profile-basic-information-content'>
            <List className='Profile-basic-info-list'>
                <ListItemText>
                <b>User:</b> Windmill Farms
                </ListItemText>
                
                <ListItemText>
                <b>Address:</b> Av.Lopez Mateos #32
                </ListItemText>

                <ListItemText>
                <b>Ubication:</b> Guadalajara, Jalisco, México
                </ListItemText>

                <ListItemText>
                <b>Speciality:</b> Farm Products    
                </ListItemText>
            </List>
        </div>
      </div>

      <div className='Profile-contact-information'>
          <h2>Contact Info</h2>
          <div className='Profile-contact-information-content'>
              
              <List>
                  <ListItemText>
                      <b>Email:</b> windmillfarms@gmail.com
                  </ListItemText>
                  
                  <ListItemText>
                      <b>Phone:</b> 9988776655
                  </ListItemText>
              </List>
          </div>
        
      </div>
      <div className='Edit-button-container'>
        <Button variant="contained" color="success" size='large' endIcon={<EditIcon />}
        className="Edit-button">Edit</Button>
      </div>
    </div>
  )
}

export default Profile