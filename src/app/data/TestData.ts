import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Study'},
    {id: 4, title: 'Rest'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Food'},
    {id: 7, title: 'Finance'},
    {id: 8, title: 'Gadgets'},
    {id: 9, title: 'Health'},
    {id: 10, title: 'Auto'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#e5e5e5'},
    {id: 2, title: 'Medium', color: '#85d1b2'},
    {id: 3, title: 'High', color: '#F1828D'},
    {id: 4, title: 'Highest', color: '#F1128D'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Заправить машину',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9]
    },
    {
      id: 2,
      title: 'Отправить отчету шефу',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2023-07-01')
    },
    {
      id: 3,
      title: 'Уборка в квартире',
      priority: TestData.priorities[3],
      completed: true,
      category: TestData.categories[1]
    },
    {
      id: 4,
      title: 'Сходить в парк с семьей. Пригласить друзей',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1]
    },
    {
      id: 5,
      title: 'Прочитать три главы Философия Java',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Сходить на конференцию по Java',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[2]
    },
    {
      id: 7,
      title: 'Выбрать отель для отдыха',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
    {
      id: 8,
      title: 'Купить продукты для воскресного ужина',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2023-06-25')
    },
    {
      id: 9,
      title: 'Купить абонемент в спорт зал',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[4]
    },
    {
      id: 10,
      title: 'Утренняя пробежка в парке',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[4]
    },
    {
      id: 11,
      title: 'Попросить аванс на работе',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[6]
    },
    {
      id: 12,
      title: 'Записаться к зубному',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8]
    }
  ];

}
