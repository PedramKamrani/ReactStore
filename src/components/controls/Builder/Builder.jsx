import '../Builder/Builder.css';

const Builder = (props) => {
    return (
        <div className="builder">
            <div className="builder">
                <p className="builder-div">{props.title}</p>
            </div>
            <button onClick={props.add} className="builder-button">Add</button>
            <button onClick={props.Remove} className="builder-button">Remove</button>
        </div>
    );
};

export default Builder;
