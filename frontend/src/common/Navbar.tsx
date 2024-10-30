const Navbar = () => {
    return (
        <div className="row bg-primary ps-5 pe-5 justify-content-between p-2">
            <div className="col-3 row">
                <div className="row col-3 align-items-center justify-content-start">
                    <img src="image.png" alt="Skull"/>
                </div>
                <div className="col-3 col align-items-center me-5">
                    <div className="row justify-content-end">
                        Try not to
                    </div>
                    <div className="row justify-content-end">
                        DIE
                    </div>
                </div>
            </div>
            <div className="col-4 nav justify-content-end align-items-center">
                <a className="nav-link text-black" href="/login">Login</a>
            </div>
        </div>
    );
}

export default Navbar;
