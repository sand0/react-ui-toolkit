import CheckboxGroup from '../lib/Checkbox/CheckboxGroup';
import Checkbox from '../lib/Checkbox/Checkbox';

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
