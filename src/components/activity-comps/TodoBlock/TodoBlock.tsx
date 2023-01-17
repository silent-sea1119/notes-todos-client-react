import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hooks/storeHook";
import { TodoCategoryTypes, TodoTypes } from "types/TodoTypes";

import { TodoCategories } from "mock-data/Todos";
import { fetchTodo, getTodo } from "store/todoSlice/sliceGetters";

import { TodoCategory } from "components";
import { motion } from "framer-motion";

import "./TodoBlock.scss";

const TodoBlock = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { todos: TodoData } = useAppSelector(getTodo);

  const [categories] = React.useState<TodoCategoryTypes[]>(TodoCategories);
  const [todo, setTodo] = React.useState<TodoTypes[]>([]);

  useEffect(() => {
    dispatch(fetchTodo({ id: params.project_id }));
  }, [dispatch, params.project_id]);

  useEffect(() => setTodo(TodoData), [TodoData]);

  const filterCategoryByTitle = (title: string): TodoTypes[] => {
    return todo?.length ? todo?.filter((item) => item?.category === title) : [];
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
