import React, {useState} from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [formData, setFormData]= useState({
    text: "",
    category: "code"
  })
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preeventDefault()
    onTaskFormSubmit(formData)
  }

  const selectOptions = [...categories]
  selectOptions.shift()
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) =>
          <option key={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
