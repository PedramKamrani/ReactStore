import './Builder.css'

const Builder = (props) => {
  return (
    <div>
        <div className='builder'>
        <p>{props.title}</p>
        </div>
      <button>Add</button>
      <button>Remove</button>
    </div>
  );
};

export default Builder;
