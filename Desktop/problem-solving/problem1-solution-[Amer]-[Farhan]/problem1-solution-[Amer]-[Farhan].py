def validateRecipe():
    fridge = ['tomato', 'banana', 'apple', 'onion', 'cucumber']
    ingredients = ['tomato' 'onion' 'lettuce']
    fridge_1 = ['onion', 'banana', 'lettuce', 'olives']
    ingredients_1 = ['olives', 'onion', 'lettuce']
    if ingredients not in fridge:
        print(False)
    else:
        print(True)
    if ingredients_1 not in fridge_1:
        print(False)
    else:
        print(True)


validateRecipe()
