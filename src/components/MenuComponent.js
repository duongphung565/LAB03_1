import React, { Component } from 'react';
import { Media } from 'reactstrap';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    print: '4.99',
                    description: 'A unique combination of India'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: 'Hot',
                    print: '1.99',
                    description: 'Deep fried Zucchini coated'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    print: '1.99',
                    description: 'Q quintessential Confusion'
                }
                ,
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'appetizer',
                    label: '',
                    print: '2.99',
                    description: 'A delectable semi-sweet new'
                }

            ]
        }
    }
    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />

                        </Media>
                        <Media body className="ml-5">
                            <Media headling>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>

                    </Media>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    <Media list>
                        {menu}
                    </Media>

                </div>
            </div>
        );
    }
}
export default Menu;
