const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-4 bg-white shadow rounded">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
export default Card;
