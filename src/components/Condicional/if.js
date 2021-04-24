
export default function CondicionalIf(props){
  if(props.test){
    return props.children
  }else{
    return false
  }
}