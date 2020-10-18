import React from 'react';
import Layout from "./Layout";
import UserHome from "./pages/UserHome";
import Login from "./pages/login";

function App() {
    return (
        <div>
            <Layout>


                <UserHome/>

            </Layout>
        </div>
    );
}

export default App;
