import React from "react";
import { TodoCategoryTypes, TodoTypes } from "types/TodoTypes";
import { TodoCategories, TodoData } from "mock-data/Todos";
import { TodoCategory } from "components";
import { motion } from "framer-motion";

import "./TodoBlock.scss";

const TodoBlock = () => {
  const [categories] = React.useState<TodoCategoryTypes[]>(TodoCategories);
  const [todo] = React.useState<TodoTypes[]>(TodoData);

  const filterCategoryByTitle = (title: string): TodoTypes[] => {
    return todo.filter((item) => item.category === title);
  };

  return (
    <motion.div initial={{ y: -10 }} animate={{ y: 0 }} className="todo-block">
      {categories.map((category) => (
        <TodoCategory
          key={category.id}
          id={category.id}
          title={category.title}
          color={category.color}
          data={filterCategoryByTitle(category.title)}
          empty_text={category.empty_text}
        />
      ))}
    </motion.div>
  );
};

export default TodoBlock;
