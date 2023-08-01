import { logo, subtitle } from "./banner.module.css";

const Banner = (props) => {

    const { headerText } = props

    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo" className={logo} />
            </div>
            <div className={`${subtitle} col-7 mt-5`}>
                {headerText}
            </div>
        </header>
    );
};

export default Banner;