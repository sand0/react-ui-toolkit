import CheckboxGroup from '../lib/Checkbox/CheckboxGroup';
import Checkbox from '../lib/Checkbox/Checkbox';
import image from '../assets/logo192.png';

import { Outlet } from 'react-router-dom';

import DemoNavigation from '../components/demo/DemoNavigation'
import PageContent from '../components/layout/PageContent'

import classes from './Demo.module.css';

const DemoPage = () => {
    return (
        <PageContent title="Explore toolkit" >
            <div className={classes.container}>


                <div className={classes.menuWrapper}>
                    <DemoNavigation />
                </div>
                <div className={classes.exampleWrapper}>
                    <Outlet />

                    <section>
                        <h2>Checkbox</h2>
                        <div>
                            <h3>General usage</h3>
                            <Checkbox checked>
                                {'Label blah'}
                            </Checkbox>
                        </div>
                        <div>
                            <h3>Disabled state</h3>
                            <Checkbox checked disabled>
                                {'Disabled checked'}
                            </Checkbox>
                            <Checkbox disabled>
                                {'Disabled unchecked'}
                            </Checkbox>
                        </div>
                        <div>
                            <h3>Required state</h3>
                            <Checkbox required>
                                {'Required'}
                            </Checkbox>
                        </div>
                        <div>
                            <h3>Error state</h3>
                            <Checkbox error>
                                {'This is invalid'}
                            </Checkbox>
                            <Checkbox required error>
                                {'Required'}
                            </Checkbox>
                        </div>
                        <div>
                            <h3>Indeterminate initial state</h3>
                            <Checkbox indeterminate>
                                {'Label'}
                            </Checkbox>
                        </div>
                        <div>
                            <h3>Custom Label element</h3>
                            <Checkbox>
                                <h3>Title Label</h3>
                            </Checkbox>
                            <Checkbox error>
                                <div style={{ borderStyle: 'solid', borderColor: '#9e9e9e50' }}>
                                    <h4>Title Label</h4>
                                    <img src={image} alt="Logo" />
                                </div>
                            </Checkbox>
                        </div>
                    </section>
                    <section>
                        <h2>CheckboxGroup</h2>
                        <div>
                            <h3>General usage</h3>
                            <CheckboxGroup name={'Demo group'} description={'Some longer description text here'} errorMessage={'Error message'}>
                                <Checkbox>
                                    {'Some item'}
                                </Checkbox>
                                <Checkbox>
                                    {'Another item'}
                                </Checkbox>
                            </CheckboxGroup>
                        </div>
                    </section>
                </div>
            </div>
        </PageContent>
    );
}

export default DemoPage;
