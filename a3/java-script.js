import VariablesAndConstants from "./variables-and-constants"; 
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import ArrowFunction from "./arrow-function";
import ImpliedReturn from "./implied-return";

//import FunctionParenthesisParameter from "./function-parenthesis-and-parameter";
import WorkingArrays from "./working-with-array";
import WorkingWithFunctions from "./working-with-functions";
import TemplateLiterals from "./template-literals";
import House from "./house";
import Spread from "./spread"
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";
import FindIndex from "./find-index"


function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <ArrowFunction/>
          <ImpliedReturn/>        
          <WorkingArrays/>
          <WorkingWithFunctions/>
          <TemplateLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
          <FindIndex/>
       </div>
    );
 }
 export default JavaScript