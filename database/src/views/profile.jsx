import { Input } from 'antd'
import '../views/profile.css'
const Profile = ()=>{
    return(
        <>
            <div className="container-profile">
                <div className="head">
                        Profile
                </div>
                <div className="detail">
                    <div className='profile'>
                        <div 
                            className='profile-detail'
                            style={{width:'50vh', color:'black', marginLeft:'20vh'}}
                        >
                           <div
                             style={{display:'flex', alignItems:'end', width:'150px',  justifyContent:'end'}}
                            >
                                ID
                            </div>
                            <Input 
                                style={{ width:'30vh', height:'4vh', marginLeft:'2vh'}}
                             disabled />
                        </div>
                        <div 
                            className='profile-detail'
                            style={{width:'50vh', color:'black', marginLeft:'20vh'}}
                        >
                           <div
                             style={{display:'flex', alignItems:'end', width:'150px', justifyContent:'end'}}
                            >
                                First name
                            </div>
                            <Input 
                                style={{ width:'30vh', height:'4vh', marginLeft:'2vh'}}
                             disabled />
                        </div>
                        <div 
                            className='profile-detail'
                            style={{ width:'50vh', color:'black', marginLeft:'20vh',}}
                        >
                           <div
                             style={{display:'flex', alignItems:'end', width:'150px',  justifyContent:'end'}}
                            >
                                Last name
                            </div>
                            <Input 
                                style={{ width:'30vh', height:'4vh', marginLeft:'2vh'}}
                             disabled />
                        </div>
                        <div 
                            className='profile-detail'
                            style={{width:'50vh', color:'black', marginLeft:'20vh'}}
                        >
                             <div
                             style={{display:'flex', alignItems:'end', width:'150px',  justifyContent:'end'}}
                            >
                                Age
                            </div>
                            <Input 
                                style={{ width:'30vh', height:'4vh', marginLeft:'2vh'}}
                             disabled />
                        </div>
                        <div 
                            className='profile-detail'
                            style={{ width:'50vh', color:'black', marginLeft:'20vh'}}
                        >
                             <div
                             style={{display:'flex', alignItems:'end', width:'150px',  justifyContent:'end'}}
                            >
                                Date of Birth
                            </div>
                            <Input 
                                style={{ width:'30vh', height:'4vh', marginLeft:'2vh'}}
                             disabled />
                        </div>
                        <div 
                            className='profile-detail'
                            style={{ width:'50vh', color:'black', marginLeft:'20vh'}}
                        >
                            <div
                             style={{display:'flex', alignItems:'end', width:'150px',  justifyContent:'end'}}
                            >
                                Gender
                            </div>
                            <Input 
                                style={{ width:'30vh', height:'4vh', marginLeft:'2vh'}}
                             disabled />
                        </div>
                        <div 
                            className='profile-detail'
                            style={{ width:'50vh', color:'black', marginLeft:'20vh'}}
                        >
                              <div
                             style={{display:'flex', alignItems:'end', width:'150px',  justifyContent:'end'}}
                            >
                                Email
                            </div>
                            <Input 
                            
                                style={{ width:'30vh', height:'4vh', marginLeft:'2vh'}}
                             disabled />
                        </div>
                        <div 
                            className='profile-detail'
                            style={{display:'flex', width:'50vh', color:'black', marginLeft:'20vh'}}
                        >
                              <div
                             style={{display:'flex', alignItems:'end', width:'150px',  justifyContent:'end'}}
                            >
                                Phone number
                            </div>
                            <Input 
                                style={{ width:'30vh', height:'4vh', marginLeft:'2vh'}}
                             disabled />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Profile