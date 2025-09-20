import { normalizeTree } from "../utils/normalizeTree.js";

export const TREE_META = { rootTitle: "Тригер 1W" };

const LEVEL_TITLES = [TREE_META.rootTitle];

function stripIdsFromTree(nodes) {
  return (nodes || []).map((n) => {
    const { children, ...rest } = n || {};
    const out = { ...rest };
    if (Array.isArray(children) && children.length) {
      out.children = stripIdsFromTree(children);
    }
    return out;
  });
}

const TREE_WITH_IDS = [
  {
    label: "Фрактал",
    children: [
      {
        label: "Підтвердження 1Д",
        children: [
          {
            label: "Злом 1Д",
            children: [
              {
                label: "Ціль 1W",
                children: [
                  {
                    label: "Фрактал 1W",
                    children: [
                      {
                        label: "POI 1Д",
                        children: [
                          {
                            label: "IMB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "IMB 1W",
                    children: [
                      {
                        label: "POI 1Д",
                        children: [
                          {
                            label: "IMB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a3y",
                    label: "OB 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "a2",
            label: "IMB 1Д",
            children: [
              {
                id: "a1x",
                label: "Ціль 1W",
                children: [
                  {
                    id: "a1y",
                    label: "Фрактал 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            label: "IMB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a2y",
                    label: "IMB 1W",
                    children: [
                      {
                        id: "a2y1",
                        label: "POI 1Д",
                        children: [
                          {
                            label: "IMB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a3y",
                    label: "OB 1W",
                    children: [
                      {
                        id: "a3y1",
                        label: "POI 1Д",
                        children: [
                          {
                            label: "IMB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "b",
        label: "Підтвердження 4Н",
        children: [
          {
            id: "b1",
            label: "OF 4H",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b2",
            label: "Злом 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b3",
            label: "IMB 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b4",
            label: "Злом + IMB 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "cat-2",
    label: "IMB",
    children: [
      {
        id: "a",
        label: "Підтвердження 1Д",
        children: [
          {
            id: "a1",
            label: "Злом 1Д",
            children: [
              {
                id: "a1x",
                label: "Ціль 1W",
                children: [
                  {
                    id: "a1y",
                    label: "Фрактал 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a2y",
                    label: "IMB 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a3y",
                    label: "OB 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "a2",
            label: "IMB 1Д",
            children: [
              {
                id: "a1x",
                label: "Ціль 1W",
                children: [
                  {
                    id: "a1y",
                    label: "Фрактал 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            label: "IMB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a2y",
                    label: "IMB 1W",
                    children: [
                      {
                        id: "a2y1",
                        label: "POI 1Д",
                        children: [
                          {
                            label: "IMB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a3y",
                    label: "OB 1W",
                    children: [
                      {
                        id: "a3y1",
                        label: "POI 1Д",
                        children: [
                          {
                            label: "IMB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 1Д",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 4Н" },
                                  { label: "Тест IMB 4Н" },
                                  { label: "Злом + IMB 4H" },
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "b",
        label: "Підтвердження 4Н",
        children: [
          {
            id: "b1",
            label: "OF 4H",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b2",
            label: "Злом 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b3",
            label: "IMB 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b4",
            label: "Злом + IMB 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            label: "IMB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            label: "OB 4H",
                            children: [
                              {
                                label: "Модель входу",
                                children: [
                                  { label: "Злом 1Н" },
                                  { label: "Тест IMB 1Н" },
                                  { label: "Злом + IMB 1H" },
                                  { label: "Злом 15m" },
                                  { label: "Тест IMB 15m" },
                                  { label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cat-3",
    label: "OB",
    children: [
      {
        id: "a",
        label: "Підтвердження 1Д",
        children: [
          {
            id: "a1",
            label: "Злом 1Д",
            children: [
              {
                id: "a1x",
                label: "Ціль 1W",
                children: [
                  {
                    id: "a1y",
                    label: "Фрактал 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a2y",
                    label: "IMB 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a3y",
                    label: "OB 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "a2",
            label: "IMB 1Д",
            children: [
              {
                id: "a1x",
                label: "Ціль 1W",
                children: [
                  {
                    id: "a1y",
                    label: "Фрактал 1W",
                    children: [
                      {
                        id: "a1y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a2y",
                    label: "IMB 1W",
                    children: [
                      {
                        id: "a2y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "a3y",
                    label: "OB 1W",
                    children: [
                      {
                        id: "a3y1",
                        label: "POI 1Д",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 1Д",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 4Н" },
                                  { id: "a3y3", label: "Тест IMB 4Н" },
                                  { id: "a3y3", label: "Злом + IMB 4H" },
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "a2y2",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "b",
        label: "Підтвердження 4Н",
        children: [
          {
            id: "b1",
            label: "OF 4H",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b2",
            label: "Злом 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b3",
            label: "IMB 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "b4",
            label: "Злом + IMB 4Н",
            children: [
              {
                id: "b1x",
                label: "Ціль 1Д",
                children: [
                  {
                    id: "b1x",
                    label: "Фрактал 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "IMB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "b1x",
                    label: "OB 1Д",
                    children: [
                      {
                        id: "b1x",
                        label: "POI 4H",
                        children: [
                          {
                            id: "a2y1",
                            label: "IMB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                          {
                            id: "a2y1",
                            label: "OB 4H",
                            children: [
                              {
                                id: "a3y3",
                                label: "Модель входу",
                                children: [
                                  { id: "a3y3", label: "Злом 1Н" },
                                  { id: "a3y3", label: "Тест IMB 1Н" },
                                  { id: "a3y3", label: "Злом + IMB 1H" },
                                  { id: "a3y3", label: "Злом 15m" },
                                  { id: "a3y3", label: "Тест IMB 15m" },
                                  { id: "a3y3", label: "Злом + IMB 15m" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const RAW_TREE = stripIdsFromTree(TREE_WITH_IDS);

export const DECISION_TREE = normalizeTree(RAW_TREE, LEVEL_TITLES);
