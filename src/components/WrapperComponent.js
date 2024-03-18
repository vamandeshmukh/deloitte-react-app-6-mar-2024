
const WrapperComponent = (props) => {


    return (
        <div style={{ color: 'blue' }} >
            <p>Wrapper</p>
            {props.childern}
        </div>

    );
}

export default WrapperComponent;
