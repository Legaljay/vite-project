import PropTypes from "prop-types";

function Card({ description, position, company, name, image }) {
  return (
    <div>
      <div className="w-[350px] text-2xl bg-white border-2 flex  justify-center items-center p-5">
        <div className="flex flex-col gap-3">
          <p className="">{description}</p>
          <div className="flex justify-start">
            <img src={image} alt="" className="w-auto rounded-[50%]" />
            <div className="flex flex-col">
              <h4>{name}</h4>
              <p>
                {position} @ {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.string,
  company: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
