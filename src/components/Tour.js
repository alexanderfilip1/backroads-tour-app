import tour1Img from "../images/tour-1.jpeg";
import tour2Img from "../images/tour-2.jpeg";
import tour3Img from "../images/tour-3.jpeg";
import tour4Img from "../images/tour-4.jpeg";
import tour5Img from "../images/tour-5.jpeg";
import tour6Img from "../images/tour-6.jpeg";

export default function Tour() {
  const TourList = [
    {
      id: 1,
      title: "Tibet Adventure",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "China",
      duration: 6,
      price: 2100,
      img: tour1Img,
      date: "August 26th, 2020",
    },
    {
      id: 2,
      title: "Best Of Java",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "Indonesia",
      duration: 11,
      price: 1400,
      img: tour2Img,
      date: "October 1th, 2020",
    },
    {
      id: 3,
      title: "Explore Hong Kong",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "Hong Kong",
      duration: 8,
      price: 5000,
      img: tour3Img,
      date: "September 15th, 2020",
    },
    {
      id: 4,
      title: "Kenya Highlights",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "Kenya",
      duration: 20,
      price: 3300,
      img: tour4Img,
      date: "December 5th, 2019",
    },
    {
      id: 5,
      title: "Explore India",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "India",
      duration: 20,
      price: 5300,
      img: tour5Img,
      date: "June 5th, 2023",
    },
    {
      id: 5,
      title: "Turkey Highlights",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
      location: "Turkey",
      duration: 14,
      price: 1700,
      img: tour6Img,
      date: "July 8th, 2024",
    },
  ];
  return TourList.map((tour) => {
    const { id, title, description, location, duration, price, img, date } =
      tour;
    return (
      <article className="tour-card" key={id}>
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt={title} />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{description}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>
              {location}
            </p>
            <p>{duration} Days</p>
            <p>From ${price}</p>
          </div>
        </div>
      </article>
    );
  });
}
