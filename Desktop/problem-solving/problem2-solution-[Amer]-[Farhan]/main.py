import tkinter as tk
root = tk.Tk()
main_text = tk.StringVar(value='Amer')
label = tk.Label(root, textvaiable=main_text)
label.pack()
main_menu = tk.Menu(root)
root.config(menu=main_menu)
main_menu.add('command', label='Quit', command=root.quit)
root.mainloop()

