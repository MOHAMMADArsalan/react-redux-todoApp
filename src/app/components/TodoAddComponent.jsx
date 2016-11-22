import React from "react";

let input,
    AddTodo = (props) => {
        return (
            <div className="col-sm-12">
                <div className="col-sm-8 col-sm-offset-2">
                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            props.AddTodo(input)
                        }
                    }>
                        <div className="form-group">
                            <input className="form-control"
                                ref={(node) => { input = node } }
                                placeholder="Enter New Todo " />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button className="btn btn-success btn-block" type="submit">
                                ADD
                          </button>
                        </div>
                    </form>
                    <div className="col-sm-2"></div>
                </div>
            </div>
                )
    }

export default AddTodo;