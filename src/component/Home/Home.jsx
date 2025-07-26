
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';


const Home = () => {


    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <div className='mb-8'>
                <Card></Card>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;