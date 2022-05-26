import React from "react";
import { TodoCategoryTypes } from "types/TodoTypes";
import { TodoCategories } from "mock-data/Todos";
import { TodoCategory } from "components";
import { motion } from "framer-motion";

import "./TodoBlock.scss";

const TodoBlock = () => {
  const [categories] = React.useState<TodoCategoryTypes[]>(TodoCategories);

  return (
    <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="todo-block">
      {categories.map((category) => (
        <TodoCategory
          key={category.id}
          id={category.id}
          title={category.title}
          color={category.color}
        />
      ))}
    </motion.div>
  );
};

export default TodoBlock;
