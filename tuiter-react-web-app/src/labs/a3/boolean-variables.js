function BooleanVariables() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let true1 = true
    let false1 = false
    let false2 = true1 && false1
    let true2 = true1 || false1 
    let true3 = !false2
    let true4 = numberVariable === 123
    let true5 = floatingPointNumber !== 321.432
    let false3 = numberVariable < 100
    let notTrue   = '1' === 1 
    return(
        <div>
            <h2>BooleanVariables</h2>
            true1 = true <br/>
            false1 = false1 <br/>
            false2 = false <br/>
            true2 = true <br/>
            false2 = false <br/>
            true3 = true <br/>
            true4 = true<br/>
            true5 = true <br/>
            false3 = false <br/>
            notTrue = false <br/>
        </div>
    )
}
export default BooleanVariables;