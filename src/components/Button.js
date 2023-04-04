import "../css/Button.css"

export const Button = ({
  buttonText,
  onClick,
}) => {
  
  return(
    <h3
      className="modal-options"
      onClick={() => onClick()}
    >
      {buttonText}
    </h3>
  )
};