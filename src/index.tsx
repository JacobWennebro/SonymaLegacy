import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route } from "./components/Router"

import Layout from './components/Layout'
import Library from './pages/Library'
import Settings from './pages/Settings'


/*fs.readdir('./repo', (err: any, files: String[]) => {
    if(err) return console.error(err);
    files.forEach((file: String) => {
        fs.readFile('./repo/' + file, {encoding:'utf8'}, (err: any, data: string) => {
            if (err) return console.error(err);
            
            console.log(YAML.parse(data));

            db.set('debug', 'hey');
        })
    });
});
*/

ReactDOM.render(
    <Layout>
        <Router>
            <Route component={Library} path="/"/>
            <Route component={Settings} path="/settings"/>
        </Router>
    </Layout>,
    document.getElementById('root')
);