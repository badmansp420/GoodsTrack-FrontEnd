import "../css/user_signup.css"
export default function UserSignUp() {
    return (
        <div class="card mx-auto col-6 m-5">
            <div class="card-body">
                <h5 class="card-title text-center">Rgister Here</h5>
                <form class="row g-3 ">
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name <span>*</span></label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="col-auto">
                        <label for="exampleInputEmail1" class="form-label">Contact No. <span>*</span></label>
                        <input type="number" class="form-control" />
                    </div>
                    <div class="col-auto">
                        <label for="exampleInputEmail1" class="form-label">User Name <span>*</span></label>
                        <input type="text" class="form-control"  />
                    </div>
                    <div class="col-auto">
                        <label for="exampleInputEmail1" class="form-label">Password <span>*</span></label>
                        <input type="password" class="form-control"  />
                    </div>
                    <div class="col-auto">
                        <label for="exampleInputEmail1" class="form-label">Aadhaar No. <span>*</span></label>
                        <input type="number" class="form-control" />
                    </div>
                    <div class="col-auto">
                        <label for="formFile" class="form-label">Aadhaar Photo <span>*</span></label>
                        <input class="form-control" type="file" id="formFile"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email Address <span>*</span></label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full Address <span>*</span></label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>


                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    )
}