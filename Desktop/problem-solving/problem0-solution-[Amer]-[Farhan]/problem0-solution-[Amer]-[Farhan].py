def whereIsMyFood():
    item = input('enter the name of fruit: ')
    fridge = ['apple', 'orange', 'lemon', 'banana', 'strawberry', 'blueberry']
    while item in fridge:
        if item == 'banana':
            print('1')
            break
        else:
            print('-1')
            break



whereIsMyFood()
