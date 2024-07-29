export default function Card({
  name,
  url,
  price,
}: {
  name: string;
  url: string;
  price: string;
}) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={url} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
