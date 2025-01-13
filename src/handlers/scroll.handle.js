
const scrollHandler = (e, dataContext) => {
  const target = e.target;
  dataContext.updateData({
    ...dataContext.data,
    scroll: {
      scrollHeight: target.scrollHeight - target.offsetHeight,
      currentScroll: target.scrollTop,
      containerHeight: target.offsetHeight,
    },
  });
};

export default scrollHandler;
