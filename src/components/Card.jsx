import './Card.css';

const Card = ({ title, description }) => {
    return (
        <section>
            <div className="borde">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default Card;
