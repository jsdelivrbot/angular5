"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const virtual_1 = require("./virtual");
class FilteredTree extends virtual_1.VirtualTree {
    constructor(tree, filter = () => true) {
        super();
        const virtualTree = (tree instanceof virtual_1.VirtualTree
            ? tree : virtual_1.VirtualTree.optimize(tree));
        // We don't know for sure that it's a FilteredTree, but we don't care;
        // VirtualTree has `tree`, we just need access to it because it's protected.
        const root = virtualTree.tree;
        const staging = virtualTree.staging;
        [...root.entries()].forEach(([path, entry]) => {
            if (filter(path, entry)) {
                this._tree.set(path, entry);
            }
        });
        [...staging.entries()].forEach(([path, entry]) => {
            if (filter(path, entry)) {
                this._cacheMap.set(path, entry);
            }
        });
        virtualTree.actions.forEach(action => {
            if (this._cacheMap.has(action.path) || this._tree.has(action.path)) {
                this._actions.push(action);
            }
        });
    }
}
exports.FilteredTree = FilteredTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyZWQuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L3NjaGVtYXRpY3Mvc3JjL3RyZWUvZmlsdGVyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSx1Q0FBd0M7QUFHeEMsa0JBQTBCLFNBQVEscUJBQVc7SUFDM0MsWUFBWSxJQUFVLEVBQUUsU0FBaUMsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQUVSLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxZQUFZLHFCQUFXO1lBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFnQixDQUFDO1FBRXRELHNFQUFzRTtRQUN0RSw0RUFBNEU7UUFDNUUsTUFBTSxJQUFJLEdBQUksV0FBNEIsQ0FBQyxJQUFJLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUVwQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUM1QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTVCRCxvQ0E0QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBGaWxlUHJlZGljYXRlLCBUcmVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVmlydHVhbFRyZWUgfSBmcm9tICcuL3ZpcnR1YWwnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJlZFRyZWUgZXh0ZW5kcyBWaXJ0dWFsVHJlZSB7XG4gIGNvbnN0cnVjdG9yKHRyZWU6IFRyZWUsIGZpbHRlcjogRmlsZVByZWRpY2F0ZTxib29sZWFuPiA9ICgpID0+IHRydWUpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgdmlydHVhbFRyZWUgPSAodHJlZSBpbnN0YW5jZW9mIFZpcnR1YWxUcmVlXG4gICAgICA/IHRyZWUgOiBWaXJ0dWFsVHJlZS5vcHRpbWl6ZSh0cmVlKSkgYXMgVmlydHVhbFRyZWU7XG5cbiAgICAvLyBXZSBkb24ndCBrbm93IGZvciBzdXJlIHRoYXQgaXQncyBhIEZpbHRlcmVkVHJlZSwgYnV0IHdlIGRvbid0IGNhcmU7XG4gICAgLy8gVmlydHVhbFRyZWUgaGFzIGB0cmVlYCwgd2UganVzdCBuZWVkIGFjY2VzcyB0byBpdCBiZWNhdXNlIGl0J3MgcHJvdGVjdGVkLlxuICAgIGNvbnN0IHJvb3QgPSAodmlydHVhbFRyZWUgYXMgRmlsdGVyZWRUcmVlKS50cmVlO1xuICAgIGNvbnN0IHN0YWdpbmcgPSB2aXJ0dWFsVHJlZS5zdGFnaW5nO1xuXG4gICAgWy4uLnJvb3QuZW50cmllcygpXS5mb3JFYWNoKChbcGF0aCwgZW50cnldKSA9PiB7XG4gICAgICBpZiAoZmlsdGVyKHBhdGgsIGVudHJ5KSkge1xuICAgICAgICB0aGlzLl90cmVlLnNldChwYXRoLCBlbnRyeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgWy4uLnN0YWdpbmcuZW50cmllcygpXS5mb3JFYWNoKChbcGF0aCwgZW50cnldKSA9PiB7XG4gICAgICBpZiAoZmlsdGVyKHBhdGgsIGVudHJ5KSkge1xuICAgICAgICB0aGlzLl9jYWNoZU1hcC5zZXQocGF0aCwgZW50cnkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZpcnR1YWxUcmVlLmFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgaWYgKHRoaXMuX2NhY2hlTWFwLmhhcyhhY3Rpb24ucGF0aCkgfHwgdGhpcy5fdHJlZS5oYXMoYWN0aW9uLnBhdGgpKSB7XG4gICAgICAgIHRoaXMuX2FjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=