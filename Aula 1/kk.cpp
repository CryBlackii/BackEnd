#include <iostream>
#include <string>

using namespace std;

class MVC {
public:
    class Model {
    private:
        string message;
    public:
        void setMessage(const string& msg) {
            message = msg;
        }
        
        string getMessage() const {
            return message;
        }
    };
    
    class View {
    public:
        void displayMessage(const string& message) {
            cout << "Message: " << message << endl;
        }
    };
    
    class Controller {
    private:
        Model& model;
        View& view;
    public:
        Controller(Model& m, View& v) : model(m), view(v) {}
        
        void setMessage(const string& message) {
            model.setMessage(message);
        }
        
        void updateView() {
            view.displayMessage(model.getMessage());
        }
    };
};

int main() {
    MVC::Model model;
    MVC::View view;
    MVC::Controller controller(model, view);
    
    controller.setMessage("mvc em c++ eh muito legal :) (socorro)");
    controller.updateView();
    
    return 0;
}