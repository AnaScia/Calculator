/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import '../styles/BotonCalculadora.css'

function BotonCalculadora(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}>
        {props.children}
      </div>
  )
}
export default BotonCalculadora
