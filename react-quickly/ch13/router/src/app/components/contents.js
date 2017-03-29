const React = require('react');
const { Link } = require('react-router');

export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Node.University</h1>
                <div className='navbar navbar-default'>
                    <ul className='nav nav-pill navbar-nav'>
                        <li className={(this.context.router.isActive('/about')) ? 'active' : ''}>
                            <Link to='/about' activeClassName='active'>About</Link>
                        </li>
                        <li className={(this.context.router.isActive('/posts')) ? 'active' : ''}>
                            <Link to='/posts' activeClassName='active'>Blog</Link>
                        </li>
                        <li className={(this.context.router.isActive('/contact')) ? 'active' : ''}>
                            <Link to='/contact' activeClassName='active'>Contact Us</Link>
                        </li>
                        <li>
                            <Link to='/login' activeClassName='active'>Login</Link>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}

Content.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export function About() {
    return (
        <div>
            <a href='http://Node.University' target='_blank'>Node.University</a> is home to top-notch Node education which brings joy to Javascript engineers.
        </div>
    )
}

export function Posts(props) {
    return (
        <div>
            Posts
            <ol>
                {props.route.posts.map((post, index)=>
                    <li key={post.slug}><Link to={`/post/${post.slug}`}>{post.title}</Link></li>
                )}
            </ol>
        </div>
    )
}

export function Post(props) {
    console.log(props);
    let post = props.route.posts.find(element => element.slug === props.params.id)
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
            <p><a href={post.link} target='blank'>Continue reading...</a></p>
        </div>
    )
}

export function Contact(props) {
    //setTimeout(() => {props.router.push('about')}, 1000)
    return (
        <div>
            <h3>Contact Us</h3>
            <input type='text' placeholder='your email' className='form-control'></input>
            <textarea type='text' placeholder='your message' className='form-control'></textarea>
            <button className='btn btn-primary'>send</button>
        </div>
    );
}

export function Login() {
    return(
        <div>
            <h3>Login</h3>
            <input type='text' placeholder='email' className='form-control'></input>
            <input type='text' placeholder='password' className='form-control'></input>
            <button className='btn btn-primary'>login</button>
        </div>
    )
}