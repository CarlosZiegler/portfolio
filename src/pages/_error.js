/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react'


class ErrorPage extends React.Component {

    static propTypes() {
        return {
            errorCode: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired
        }
    }

    static getInitialProps({ res, xhr }) {
        const errorCode = res ? res.statusCode : (xhr ? xhr.status : null)
        return { errorCode }
    }

    render() {
        var response
        switch (this.props.errorCode) {
            case 200: // Also display a 404 if someone requests /_error explicitly
            case 404:
                response = (
                    <div>

                        <div className="pt-5 text-center">
                            <h1 className="display-4">Page Not Found</h1>
                            <p>The page <strong>{this.props.router.pathname}</strong> does not exist.</p>
                            <p><a href="/"><a>Home</a></a></p>
                        </div>
                    </div>
                )
                break
            case 500:
                response = (
                    <div>

                        <div className="pt-5 text-center">
                            <h1 className="display-4">Page Not Found</h1>
                            <p>The page <strong>{this.props.router.pathname}</strong> does not exist.</p>
                            <p><a href="/"><a>Home</a></a></p>
                        </div>
                    </div>
                )
                break
            default:
                response = (
                    <div>

                        <div className="pt-5 text-center">
                            <h1 className="display-4">Page Not Found</h1>
                            <p>The page <strong>{this.props.router.pathname}</strong> does not exist.</p>
                            <p><a href="/"><a>Home</a></a></p>
                        </div>
                    </div>
                )
                break
        }

        return response
    }

}

export default ErrorPage