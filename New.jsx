const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Vegetales</h1>
            <nav>
                <a href="/vegetales"> Go Back To Vegetale Home Page</a>
            </nav>
            <form method="POST" action="/vegetale">
                Name: <input type="text" name="name" placeholder='Name of Vegetale Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of Vegetale Here'></input><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Fruit"></input>
            </form>
            </>
        )
    }
}

module.exports = New