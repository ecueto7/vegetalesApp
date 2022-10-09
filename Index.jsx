const React = require('react');

class Index extends React.Component{
    render(){
        const {fVegetales} = this.props
        return(
            <div>
                <h1>Vegetale Index Page</h1>
                <nav>
                    <a href="/vegetales/new">Create a New Vegetale </a>
                </nav>
                <ul>
                    {
                        fruits.map((vegetale) => {
                            const {name, color, readyToEat} = vegetale
                            return (
                                <li key={vegetale._id}>
                                    <a href={`/vegetale/${vegetale._id}`}>
                                    {name}</a> is {color}
                                    
                                     <br/>
                                    {
                                        readyToEat? 
                                        'It\'s ready to eat':
                                        'It\'s not ready to eat'
                                    }
                                    <br/>
                                    <form method="POST" action={`/vegetales/${vegetale._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${color} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index