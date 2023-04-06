import React from 'react';

const List = (props) => {
    return (
        <div>
            <ul className="list-group mt-3">
                {
                    props.dir.map((item, index)=>
                        (<li className="list-group-item" key={item._id}>{item.name} - {item.contact} <span className="float-right">
                            <button
                                className="btn btn-success btn-sm mr-2"
                                onClick={(e)=> props.view(item, e)}
                            >View</button>
                            <button
                                className="btn btn-warning btn-sm mr-2"
                                onClick={(e)=> props.edit(item._id)}
                            >Edit</button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={(e)=> props.delete(item._id)}
                            >Delete</button>
                        </span></li>)
                    )
                }
            </ul>
        </div>
    );
};

export default List;
