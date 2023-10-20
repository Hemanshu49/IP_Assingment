import React from 'react'

const Profile = () => {


  return (
    <div className="container mt-2">
        <div className="card">
  <div className="card-body">
                   
  <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                           
                            <h3 className="mt-3">Name: </h3>
                            <h3 className="mt-3">Age: </h3>
                            <h3><p className="mt-3">Email:</p></h3>
                            <h3><p className="mt-3">Work: </p></h3>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">

                            <p className="mt-5">mobile: </p>
                            <p className="mt-3">location:  </p>
                            <p className="mt-3">Description: </p>
                        </div>
                    </div>
  </div>
</div>
      
    </div>
  )
}

export default Profile
