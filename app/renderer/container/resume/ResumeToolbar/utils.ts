export const onAddToolbar = (prevToolbarList: TSResume.SliderItem[], moduleToolbar: TSResume.SliderItem): TSResume.SliderItem[] => {
    // 1. 获取已添加模块的所有 key 值
    const addKeysList = prevToolbarList.map((item: TSResume.SliderItem) => item.key);
    let nextAddToolbarList = [...Array.from(prevToolbarList)];
    // 2. 如果未包含当前要添加的模块key，则加入
    if (!addKeysList.includes(moduleToolbar.key)) {
        nextAddToolbarList = nextAddToolbarList.concat(moduleToolbar);
    }
    return nextAddToolbarList
};

/**
 * @description 删除工具条模块
 * @param {TSResume.SliderItem[]} prevToolbarList 上一轮
 * @param {TSResume.SliderItem} currentToolbar 当前目标模块
 * @returns {TSResume.SliderItem[]} nextToolbarList 下一轮
 */
export const onDeleteToolbar = (prevToolbarList: TSResume.SliderItem[], moduleToolbar: TSResume.SliderItem): TSResume.SliderItem[] => {
    const nextUnAddToolbarList = [...Array.from(prevToolbarList)];
    const findIndex = nextUnAddToolbarList.findIndex((item) => item.key === moduleToolbar.key);
    if (findIndex > -1) {
        nextUnAddToolbarList.splice(findIndex, 1);
    }
    return nextUnAddToolbarList
};
