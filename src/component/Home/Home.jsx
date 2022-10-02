import React, {Component} from 'react';
import s from './home.module.css'
class Home extends Component {
    render() {
        return (
            <>
                <section  className={s.section}>
                        <div className={s.div}>
                            <h3 >Buy fast,<span></span></h3>
                            <h3>sell Fast. <span></span></h3>
                            <h3> And we have great tools for that. <span></span></h3>
                        </div>
                </section>
            </>
        );
    }
}

export default Home;