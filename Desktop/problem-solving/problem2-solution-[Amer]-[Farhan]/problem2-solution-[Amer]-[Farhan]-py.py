def validateRecipeWithQuantity():
    ingredients = {'tomato': 1, 'onion': 2}
    fridge = {'tomato': 1, 'onion': 1}
    if ingredients.keys() == fridge.keys():
        print(False)
    else:
        print(True)



validateRecipeWithQuantity()
