function FunctionParenthesisParameter () {
const square = a => a * a;
const plusOne = a => a + 1;

const twoSquared = square(2);
const threePlusOne = plusOne(3);
return (
    <div>
        <h2>Parenthesis and parameters</h2>
        twoSquared = {twoSquared}<br/>
        sqaure(2) = {twoSquared}<br/>
        threePlusOne = {twoSquared}<br/>
        plusOne(3) = {threePlusOne}<br/>
    </div>
)
}
export default FunctionParenthesisParameter;