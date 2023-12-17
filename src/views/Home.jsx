
import pokeball from "../assets/imgs/poke_ball.png";

const Home = () => {
  return (
    <>
      <section className="pokeball">
        <h2>Bienvenido Maestro Pokemón</h2>
        <div className="img-cont">
          <img src={pokeball} alt="pokeball" />
        </div>
      </section>
    </>
  );
};
export default Home;
