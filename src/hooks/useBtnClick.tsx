const useBtnClick = (btn: any) => {
  const updateBtnState = (message: string, status: boolean = true) => {
    btn.innerHTML = message;
    btn.disabled = status ? true : false;
  };

  return updateBtnState;
};

export default useBtnClick;
