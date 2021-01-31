export default function Counter({quantity, id, handleCounter}) { 
  return (
      <div>
        <button
          className="btn btn-light ctrl"
          onClick={() => handleCounter(id, "dec")}
        >
          –
        </button>
        <span className="mx-3">{quantity}</span>
        <button
          className="btn btn-light ctrl"
          onClick={() => handleCounter(id, "inc")}
        >
          +
        </button>
      </div>
    );
}